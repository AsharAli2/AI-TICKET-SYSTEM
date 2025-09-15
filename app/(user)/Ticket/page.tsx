// src/components/CreateTicketForm.tsx

'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Define the validation schema using Zod
const formSchema = z.object({
  description: z.string()
    .min(10, { message: 'Description must be at least 10 characters long.' })
    .max(500, { message: 'Description cannot be longer than 500 characters.' }),
  // The image is optional in the schema, but we'll handle the file itself
  image: z.any().optional(),
});

export default function Ticket() {
  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // IMPORTANT: You need to handle file upload here.
    // The `values.image` will contain the File object.
    // You would typically use FormData to send it to your server.
    console.log('Form Submitted!');
    console.log('Description:', values.description);
    console.log('Image File:', values.image);
    alert('Ticket created! Check the console for the form data.');
    // Here you would call your API endpoint
  }

  // 3. Define the reset handler.
  function handleReset() {
    form.reset();
    setImagePreview(null);
    // This is a bit of a trick to clear the file input
    const fileInput = document.getElementById('image-upload') as HTMLInputElement;
    if (fileInput) {
        fileInput.value = '';
    }
  }

  // Handle image selection and create a preview URL
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Set the file object in the form state
      form.setValue('image', file);
      // Create a URL for previewing the image
      setImagePreview(URL.createObjectURL(file));
    } else {
      // Clear the preview if no file is selected
      form.setValue('image', undefined);
      setImagePreview(null);
    }
  };

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
        
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create a New Support Ticket</CardTitle>
        <CardDescription>
          Please describe your issue and attach a screenshot if possible.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {/* Description Field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticket Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us in detail what's happening..."
                      className="resize-none"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A detailed description helps us resolve your issue faster.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Attachment Field */}
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Attach Image</FormLabel>
                  <FormControl>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/png, image/jpeg, image/gif"
                      onChange={handleImageChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Preview Section */}
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Image Preview:</p>
                <div className="relative w-full h-64 border rounded-md overflow-hidden">
                  
                  <Image
                    src={imagePreview}
                    alt="Selected image preview"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit">Create New Ticket</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
    
      </main>
  );
}