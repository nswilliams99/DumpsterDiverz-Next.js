"use client";


import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useKBArticle, useUpdateKBArticle } from '@/hooks/useKnowledgeBase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, ThumbsUp, ThumbsDown, Eye } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const KnowledgeBaseArticle = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [hasVoted, setHasVoted] = useState(false);
  
  const { data: article, isLoading, error } = useKBArticle(slug || '');
  const updateArticle = useUpdateKBArticle();

  const handleHelpfulVote = async (isHelpful: boolean) => {
    if (!article || hasVoted) return;

    try {
      const updates = isHelpful 
        ? { helpful_count: (article.helpful_count || 0) + 1 }
        : { not_helpful_count: (article.not_helpful_count || 0) + 1 };

      await updateArticle.mutateAsync({
        id: article.id,
        ...updates,
        view_count: (article.view_count || 0) + 1
      });

      setHasVoted(true);
      toast.success(isHelpful ? "Thanks for your feedback!" : "Thanks for letting us know.");
    } catch (error) {
      toast.error("Failed to record your feedback. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-industrial-light">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-32 mb-6" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-industrial-light">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-industrial-dark mb-4">Article Not Found</h1>
            <p className="text-xl text-industrial-gray mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/help">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Help Center
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-industrial-light">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              href="/help" 
              className="inline-flex items-center text-diverz-purple hover:text-diverz-magenta transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Help Center
            </Link>
          </div>

          {/* Article */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                {article.kb_categories && (
                  <Badge variant="outline">
                    {article.kb_categories.name}
                  </Badge>
                )}
                <div className="flex items-center text-sm text-industrial-gray">
                  <Eye className="mr-1 h-4 w-4" />
                  {article.view_count || 0} views
                </div>
              </div>
              
              <CardTitle className="text-3xl lg:text-4xl text-industrial-dark mb-4">
                {article.title}
              </CardTitle>
              
              {article.excerpt && (
                <p className="text-xl text-industrial-gray">
                  {article.excerpt}
                </p>
              )}
            </CardHeader>
            
            <CardContent>
              <div 
                className="prose prose-lg max-w-none text-industrial-dark"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>

          {/* Helpful voting */}
          <Card>
            <CardContent className="py-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-industrial-dark mb-4">
                  Was this article helpful?
                </h3>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Button
                    variant={hasVoted ? "secondary" : "outline"}
                    onClick={() => handleHelpfulVote(true)}
                    disabled={hasVoted || updateArticle.isPending}
                    className="flex items-center gap-2"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Yes ({article.helpful_count || 0})
                  </Button>
                  
                  <Button
                    variant={hasVoted ? "secondary" : "outline"}
                    onClick={() => handleHelpfulVote(false)}
                    disabled={hasVoted || updateArticle.isPending}
                    className="flex items-center gap-2"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    No ({article.not_helpful_count || 0})
                  </Button>
                </div>
                
                {hasVoted && (
                  <p className="text-sm text-industrial-gray">
                    Thank you for your feedback!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBaseArticle;
