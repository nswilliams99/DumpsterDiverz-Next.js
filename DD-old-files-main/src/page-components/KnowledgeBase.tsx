"use client";


import { useState } from 'react';
import { useKBCategories, useKBArticles } from '@/hooks/useKnowledgeBase';
import { useSemanticSearch } from '@/hooks/useSemanticSearch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Book } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const { data: categories, isLoading: categoriesLoading } = useKBCategories();
  const { data: articles, isLoading: articlesLoading } = useKBArticles(selectedCategory || undefined);
  const { search, results, isSearching } = useSemanticSearch();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await search({
        query: searchQuery,
        contentType: 'kb_article',
        limit: 10
      });
    }
  };

  const displayArticles = searchQuery.trim() ? results : articles;

  return (
    <div className="min-h-screen bg-industrial-light">
      <SEO
        title="Help Center - Dumpster Diverz"
        description="Find answers to your questions about our waste management services. Get help with dumpster rentals, trash pickup, and more."
        canonical="https://www.dumpsterdiverz.com/help"
        keywords={["help center", "support", "dumpster rental help", "trash service questions", "FAQ"]}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Book className="h-12 w-12 text-diverz-purple mr-3" />
              <h1 className="text-4xl lg:text-5xl font-bold text-industrial-dark">
                Help Center
              </h1>
            </div>
            <p className="text-xl text-industrial-gray">
              Find answers to your questions about our waste management services
            </p>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-industrial-gray" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-20 h-12 text-lg"
              />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </form>

          {/* Categories */}
          {!searchQuery.trim() && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-industrial-dark mb-4">Browse by Category</h2>
              {categoriesLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-24 w-full" />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 mb-6">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    onClick={() => setSelectedCategory(null)}
                    className="mb-2"
                  >
                    All Articles
                  </Button>
                  {categories?.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      className="mb-2"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Articles */}
          <div>
            {searchQuery.trim() && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-industrial-dark">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-industrial-gray">
                  {results.length} {results.length === 1 ? 'result' : 'results'} found
                </p>
              </div>
            )}

            {articlesLoading || isSearching ? (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-32 w-full" />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {displayArticles?.length === 0 ? (
                  <Card className="text-center py-12">
                    <CardContent>
                      <p className="text-industrial-gray text-lg mb-4">
                        {searchQuery.trim() 
                          ? "No articles found for your search." 
                          : "No articles available in this category."}
                      </p>
                      {searchQuery.trim() && (
                        <Button onClick={() => setSearchQuery('')} variant="outline">
                          Clear Search
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  displayArticles?.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">
                              <Link 
                                to={`/help/${article.slug}`}
                                className="text-industrial-dark hover:text-diverz-purple transition-colors"
                              >
                                {article.title}
                              </Link>
                            </CardTitle>
                            {article.excerpt && (
                              <CardDescription className="text-base">
                                {article.excerpt}
                              </CardDescription>
                            )}
                          </div>
                          {searchQuery.trim() && 'similarity' in article && (
                            <Badge variant="secondary" className="ml-4">
                              {Math.round(article.similarity * 100)}% match
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-industrial-gray">
                          {!searchQuery.trim() && 'kb_categories' in article && article.kb_categories && (
                            <Badge variant="outline">
                              {article.kb_categories.name}
                            </Badge>
                          )}
                          <span>{article.view_count || 0} views</span>
                          {'helpful_count' in article && article.helpful_count !== undefined && (
                            <span>{article.helpful_count} helpful votes</span>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
