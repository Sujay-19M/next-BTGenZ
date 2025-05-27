"use client";

import { useState, useTransition } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { summarizeBiotechNews } from '@/ai/flows/summarize-biotech-news';
import { useToast } from "@/hooks/use-toast";
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { BrainCircuit, Loader2, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export function NewsSummarizer() {
  const [articleContent, setArticleContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!articleContent.trim()) {
      toast({
        title: "Input Required",
        description: "Please paste the article content to summarize.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      try {
        setSummary(''); // Clear previous summary
        const result = await summarizeBiotechNews({ articleContent });
        setSummary(result.summary);
        toast({
          title: "Summary Generated!",
          description: "The article has been successfully summarized.",
        });
      } catch (error) {
        console.error("Error summarizing news:", error);
        toast({
          title: "Error",
          description: "Failed to summarize the article. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <SectionWrapper id="news-summarizer" className="bg-background">
      <SectionTitle subtitle="Paste any biotech news article below and get a quick, AI-powered summary.">
        AI News Summarizer
      </SectionTitle>
      <Card className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="p-6">
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">Summarize Biotech News</CardTitle>
              <CardDescription>Get key insights from long articles in seconds.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <Textarea
            placeholder="Paste your biotech article content here..."
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
            rows={10}
            className="shadow-inner focus:ring-primary focus:border-primary"
            disabled={isPending}
          />
          <Button onClick={handleSubmit} disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Summarizing...
              </>
            ) : (
              "Summarize Article"
            )}
          </Button>
        </CardContent>
        {summary && !isPending && (
          <CardFooter className="p-6">
            <Alert className="w-full border-primary/50">
              <FileText className="h-5 w-5 text-primary" />
              <AlertTitle className="font-semibold text-primary">Generated Summary</AlertTitle>
              <AlertDescription className="mt-2 text-foreground whitespace-pre-line">
                {summary}
              </AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </Card>
    </SectionWrapper>
  );
}
