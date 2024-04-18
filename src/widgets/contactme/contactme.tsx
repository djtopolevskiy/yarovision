"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/shared/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { Button } from "@/shared/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import { Input } from "@/shared/ui/input";

import { useToast } from "@/shared/ui/use-toast";

import { Textarea } from "@/shared/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/widgets/header/_ui/navtop";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Bird for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Mobile App Develoment",
    "Social Media Marketing",
    "UI/UX Design",
    "Branding",
    "Website Development",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Evaluate Bird for my company" | "Learn More" | "Get a Quote" | "Other";
  services:
    | "Mobile App Develoment"
    | "Social Media Marketing"
    | "UI/UX Design"
    | "Branding"
    | "Website Development";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Develoment",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="contactme" className=" w-full font-montserrat md:items-center py-5 md:py-0 md:justify-center relative overflow-hidden border-b border-custom bg-gradient-to-r from-transparent to-gray-700">
      
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium w-full md:w-2/3  pb-5 md:text-7xl ">
            Contact me
          </div>
          <div className="py-4">
            Let&apos;s talk about how Yarovision can help you create video ads.
          </div>

          <div className="bg-foreground md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col bg-gradient-to-r from-transparent to-gray-700">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 text-primary-foreground">
                Yarovision will help you make the results of your work more noticeable.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 text-primary-foreground">
                Emotion in every frame of our product.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 text-primary-foreground">
                We will show your product interesting.
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border border-primary rounded-3xl p-10 md:w-1/3">
              <div className="md:flex items-center gap-6 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm text-primary ">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="border-primary" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm text-primary">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="border-primary"/>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm text-primary ">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="border-primary" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm text-primary ">
                      Company name?
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="border-primary" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full ">
                    <FormLabel className="text-sm text-primary ">
                    Deadline
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-primary">
                          <SelectValue placeholder="Select an option" className="font-primary " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="font-montserrat">
                        <div className="flex gap-4 ">
                          <SelectItem value="Mobile App Develoment" >
                          up to 1 week
                          </SelectItem>
                        </div>
                        <SelectItem value="Social Media Marketing">up to 2 weeks</SelectItem>
                        <SelectItem value="51-200">up to 1 month</SelectItem>
                        <SelectItem value="501-1000">up to 3 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm text-primary ">
                      Project budget
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-primary ">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="font-montserrat">
                        <div className="flex gap-4">
                          <SelectItem value="Evaluate Bird for my company">
                            up to 1000 US dollars
                          </SelectItem>
                        </div>
                        <SelectItem value="Learn More">more than 1000 US dollars</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-primary ">
                      Describe your idea
                    </FormLabel>
                    <FormControl>
                      <Textarea className="border-primary" style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    className="
                outline
                border-1
                text-sm
                font-light
                 text-primary
                "
                  />
                </div>
                <div className="text-xs font-montserrat font-normal  md:w-3/4 mb-1 text-primary ">
                  I agree to Yarovision sending marketing communications related 3D Motion design
                  
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="
                            text-sm
                            font-normal
                            text-primary-foreground
                            "
                  disabled={loading}
                  onClick={() => form.handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        

 
        px-8

        "
              >
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-primary mx-auto" />

                  <div className="text-primary font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}