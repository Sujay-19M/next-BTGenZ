
"use client";

import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { SectionTitle } from '@/components/btgenz/section-title';
import { MessageSquarePlus, Upload, User, Send } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function FeedbackForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and comment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Feedback Submitted:", { name, comment, imageName: imageFile?.name });

    toast({
      title: "Feedback Sent!",
      description: "Thank you for your valuable feedback. It will be reviewed by our team.",
    });

    // Reset form
    setName('');
    setComment('');
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setIsSubmitting(false);
  };

  return (
    <SectionWrapper id="feedback-form" className="bg-muted/30">
      <SectionTitle subtitle="Share your thoughts and experiences with the BTGenZ community. Your feedback helps us grow!">
        Join the Conversation
      </SectionTitle>
      <Card className="max-w-2xl mx-auto shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="p-6">
          <div className="flex items-center gap-3">
            <MessageSquarePlus className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">Share Your Story</CardTitle>
              <CardDescription>We'd love to hear from you!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                <User className="w-4 h-4" /> Your Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="shadow-inner"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="comment" className="flex items-center gap-2 text-foreground">
                <Send className="w-4 h-4" /> Your Comment/Feedback
              </Label>
              <Textarea
                id="comment"
                placeholder="Share your experience, ask a question, or give feedback..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={5}
                disabled={isSubmitting}
                className="shadow-inner"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="flex items-center gap-2 text-foreground">
                <Upload className="w-4 h-4" /> Add an Image (Optional)
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={isSubmitting}
                ref={fileInputRef}
                className="shadow-inner file:text-primary file:font-medium hover:file:bg-primary/10"
              />
            </div>
            {imagePreview && (
              <div className="mt-4 p-2 border border-dashed border-primary/50 rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Image Preview:</p>
                <Image
                  src={imagePreview}
                  alt="Selected image preview"
                  width={100}
                  height={100}
                  className="rounded-md object-cover max-h-[100px] w-auto"
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="p-6">
            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              {isSubmitting ? (
                <>
                  <Send className="mr-2 h-4 w-4 animate-pulse" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </SectionWrapper>
  );
}
