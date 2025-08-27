"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (location: string) => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for your City..."
            disabled={loading}
            className="!p-6 text-base md:text-lg"
          />
          <Button
            type="submit"
            disabled={loading}
            size="icon"
            variant="ghost"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="size-6 rounded-full border-2 border-t-transparent border-blue-500"
              />
            ) : (
              <FiSearch className="size-6 opacity-40" />
            )}
          </Button>
        </div>
      </motion.div>
    </form>
  );
};

export default SearchBar;
