
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SEARCHABLE_BLOG_ARTICLES, type SearchableBlogArticle } from "@/lib/constants";
import { Search, ExternalLink, FileText } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchableBlogArticle[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const allArticles = SEARCHABLE_BLOG_ARTICLES;
  const suggestedArticles = allArticles.slice(0, 5); // Show first 5 as suggestions

  React.useEffect(() => {
    if (open) {
      // Focus input when dialog opens
      setTimeout(() => inputRef.current?.focus(), 100);
      // Reset search term when dialog opens
      setSearchTerm(""); 
    }
  }, [open]);

  React.useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if search term is empty
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredArticles = allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchResults(filteredArticles);
  }, [searchTerm, allArticles]);

  const articlesToDisplay = searchTerm.trim() === "" ? suggestedArticles : searchResults;
  const displayTitle = searchTerm.trim() === "" ? "Suggestions" : "Search Results";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl flex items-center gap-2 text-primary">
            <Search className="h-6 w-6" /> Search Articles & Pages
          </DialogTitle>
          <DialogDescription>
            Find blog posts, guides, and information across BTGenZ.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-0 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 h-11 text-base"
            />
          </div>
        </div>
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {articlesToDisplay.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {displayTitle} ({articlesToDisplay.length})
              </h3>
              <ul className="space-y-3">
                {articlesToDisplay.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={article.href}
                      className="group flex items-start gap-3 p-3 -m-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => onOpenChange(false)} // Close dialog on link click
                    >
                      <article.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : searchTerm.trim() !== "" ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-medium text-foreground">No Results Found</p>
              <p className="text-sm text-muted-foreground">
                Try a different search term or explore our suggestions.
              </p>
            </div>
          ) : (
             <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-medium text-foreground">Start Typing to Search</p>
              <p className="text-sm text-muted-foreground">
                Or check out our suggestions above.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
