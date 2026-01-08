import { useState, useEffect, useRef } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Loader2 } from "lucide-react";

interface SearchResult {
  place_id: string;
  description: string;
}

interface LocationSearchProps {
  onSelectLocation: (
    location: google.maps.places.AutocompletePrediction
  ) => void;
  onClose: () => void;
}

export default function LocationSearch({
  onSelectLocation,
  onClose,
}: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [isSearching, setIsSearching] = useState(false);
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);

  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteService.current =
        new google.maps.places.AutocompleteService();
    }
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery && autocompleteService.current) {
        setIsSearching(true);
        autocompleteService.current.getPlacePredictions(
          { input: searchQuery },
          (predictions, status) => {
            setIsSearching(false);
            if (
              status === google.maps.places.PlacesServiceStatus.OK &&
              predictions
            ) {
              setSearchResults(predictions);
            } else {
              setSearchResults([]);
            }
          }
        );
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSelectLocation = (
    location: google.maps.places.AutocompletePrediction
  ) => {
    onSelectLocation(location);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Location</h2>
        <div className="mb-4">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a location"
            className="w-full text-base" // Added text-base class
          />
        </div>
        <ScrollArea className="h-60 rounded-md border">
          {isSearching ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div
                key={result.place_id}
                className="p-3 hover:bg-gray-100 cursor-pointer transition-colors duration-200 border-b last:border-b-0"
                onClick={() => handleSelectLocation(result)}
              >
                {result.description}
              </div>
            ))
          ) : (
            <div className="p-3 text-center text-gray-500">
              {searchQuery ? "No results found" : "Start typing to search"}
            </div>
          )}
        </ScrollArea>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}
