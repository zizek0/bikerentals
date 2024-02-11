"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
  pickupDateTime: z.date({
    required_error: "Pickup date and time is required.",
  }),
  dropoffDateTime: z.date({
    required_error: "Dropoff date and time is required.",
  }),
});

function AutocompleteAddress() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="p-2 md:p-6 border-[2px] rounded-xl">
      <p className="text-[40px] font-bold">Find a ride</p>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-8">
        <div className="flex space-x-4">
        <FormField
          control={form.control}
          name="pickupDateTime"
          render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-lg">Pickup Date</FormLabel>
            <Popover>
            <PopoverTrigger asChild>
              <Button
              variant={"outline"}
              className={`w-[240px] pl-3 text-left font-normal ${
                !field.value && "text-muted-foreground"
              }`}
              >
              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) => date > new Date()}
              initialFocus
              />
            </PopoverContent>
            </Popover>
          </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pickupDateTime"
          render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-lg">Pickup Time</FormLabel>
            <Input type="time"/>
          </FormItem>
          )}
        />
        </div>
        
        <div className="flex space-x-4">
        <FormField
          control={form.control}
          name="dropoffDateTime"
          render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-lg">Drop off Date</FormLabel>
            <Popover>
            <PopoverTrigger asChild>
              <Button
              variant={"outline"}
              className={`w-[240px] pl-3 text-left font-normal ${
                !field.value && "text-muted-foreground"
              }`}
              >
              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              disabled={(date) => date > new Date()}
              initialFocus
              />
            </PopoverContent>
            </Popover>
          </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dropoffDateTime"
          render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-lg">Drop off Time</FormLabel>
                  <Input type="time" />
                </FormItem>
              )}
            />
          </div>
          
          <button className="p-3 bg-black w-full mt-5 text-white rounded-lg">Search for bikes</button>
        </form>
      </Form>
    </div>
  );
}

export default AutocompleteAddress;
