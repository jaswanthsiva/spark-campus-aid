import { useState } from "react";
import { Filter, Search, MapPin, Clock, Star, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: {
    skills: string[];
    priceRange: [number, number];
    rating: number;
    availability: string;
    location: string;
  };
  setFilters: (filters: any) => void;
  onClearFilters: () => void;
}

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  onClearFilters,
}: SearchFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const popularSkills = [
    "React", "Python", "Machine Learning", "UI/UX Design", 
    "Data Science", "Node.js", "JavaScript", "Java",
    "Mobile Development", "System Design", "Interview Prep"
  ];

  const toggleSkill = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter(s => s !== skill)
      : [...filters.skills, skill];
    setFilters({ ...filters, skills: newSkills });
  };

  const activeFiltersCount = 
    filters.skills.length + 
    (filters.rating > 0 ? 1 : 0) + 
    (filters.availability !== "any" ? 1 : 0) + 
    (filters.location !== "" ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Enhanced Search Bar */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for skills, mentors, or help..."
          className="pl-12 pr-4 h-14 text-lg bg-gradient-glass border-0 shadow-glow focus-visible:shadow-hover transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="relative glass-morphism hover:shadow-hover transition-all duration-300"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 p-6 glass-morphism border-0 shadow-floating">
            <div className="space-y-6">
              <h3 className="font-semibold text-lg bg-gradient-text bg-clip-text text-transparent">
                Filter Results
              </h3>

              {/* Skills Filter */}
              <div className="space-y-3">
                <h4 className="font-medium">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {popularSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={filters.skills.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <IndianRupee className="h-4 w-4" />
                  Hourly Rate (₹{filters.priceRange[0]} - ₹{filters.priceRange[1]})
                </h4>
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters({ ...filters, priceRange: value as [number, number] })}
                  max={2000}
                  min={100}
                  step={50}
                  className="w-full"
                />
              </div>

              <Separator />

              {/* Rating Filter */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Minimum Rating
                </h4>
                <div className="flex gap-2">
                  {[0, 3, 4, 4.5].map((rating) => (
                    <Button
                      key={rating}
                      variant={filters.rating === rating ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilters({ ...filters, rating })}
                      className="flex items-center gap-1"
                    >
                      {rating === 0 ? "Any" : (
                        <>
                          <Star className="h-3 w-3 fill-current" />
                          {rating}+
                        </>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Availability */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Availability
                </h4>
                <div className="flex gap-2">
                  {[
                    { label: "Any", value: "any" },
                    { label: "Now", value: "now" },
                    { label: "Today", value: "today" },
                    { label: "This Week", value: "week" }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={filters.availability === option.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilters({ ...filters, availability: option.value })}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <Button 
                  variant="destructive" 
                  onClick={onClearFilters}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </PopoverContent>
        </Popover>

        {/* Active Filter Tags */}
        {filters.skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => toggleSkill(skill)}
          >
            {skill} ×
          </Badge>
        ))}

        {filters.rating > 0 && (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            {filters.rating}+ rating
          </Badge>
        )}

        {filters.availability !== "any" && (
          <Badge variant="secondary">
            Available {filters.availability}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;