import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const studentParentSchema = z.object({
  iam: z.enum(["student", "parent"]),
  fullName: z.string().min(1, "Full Name is required."),
  mobile: z.string().min(1, "Mobile Number is required."),
  email: z.string().email("Enter a valid email address."),
  subjectsNeeded: z.string().min(1, "Please enter at least one subject."),
  gradeLevel: z.enum(["Grade 6", "Grade 7", "Grade 8", "O-Level", "IGCSE"]),
  tuitionType: z.enum(["Online", "In-person", "Either"]),
  city: z.string().optional(),
  preferredTiming: z.enum(["Morning", "Afternoon", "Evening", "Flexible"]),
  specificRequirements: z.string().optional(),
});

const tutorSchema = z.object({
  fullName: z.string().min(1, "Full Name is required."),
  mobile: z.string().min(1, "Mobile Number is required."),
  email: z.string().email("Enter a valid email address."),
  highestQualification: z.string().min(1, "Highest qualification is required."),
  subjectsTeach: z.string().min(1, "Please provide subjects you teach."),
  gradeLevelsTeach: z.string().min(1, "Please provide grade levels you teach."),
  tuitionTypeOffer: z.enum(["Online", "In-person", "Both"]),
  city: z.string().optional(),
  yearsExperience: z.coerce.number().min(0, "Years must be 0 or more."),
  teachingBackground: z.string().min(10, "Please add a short teaching background."),
});

type StudentParentValues = z.infer<typeof studentParentSchema>;
type TutorValues = z.infer<typeof tutorSchema>;

async function submitInquiry(payload: {
  type: string;
  name: string;
  email: string;
  phone: string;
  role?: string;
  gradeLevel?: string;
  subjectInterest?: string;
  learningMode?: string;
  message?: string;
}) {
  const response = await fetch(api.inquiries.create.path, {
    method: api.inquiries.create.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.message || "Submission failed.");
  }
}

export function TutorBookingRegistrationDialogs() {
  const [studentOpen, setStudentOpen] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);
  const [studentSubmitted, setStudentSubmitted] = useState(false);
  const [tutorSubmitted, setTutorSubmitted] = useState(false);
  const [studentPending, setStudentPending] = useState(false);
  const [tutorPending, setTutorPending] = useState(false);
  const [studentError, setStudentError] = useState<string | null>(null);
  const [tutorError, setTutorError] = useState<string | null>(null);

  const studentForm = useForm<StudentParentValues>({
    resolver: zodResolver(studentParentSchema),
    defaultValues: {
      iam: "parent",
      fullName: "",
      mobile: "",
      email: "",
      subjectsNeeded: "",
      gradeLevel: "O-Level",
      tuitionType: "Either",
      city: "",
      preferredTiming: "Flexible",
      specificRequirements: "",
    },
  });

  const tutorForm = useForm<TutorValues>({
    resolver: zodResolver(tutorSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      highestQualification: "",
      subjectsTeach: "",
      gradeLevelsTeach: "",
      tuitionTypeOffer: "Both",
      city: "",
      yearsExperience: 1,
      teachingBackground: "",
    },
  });

  async function onStudentSubmit(values: StudentParentValues) {
    setStudentPending(true);
    setStudentError(null);
    try {
      await submitInquiry({
        type: "tutor_booking_student",
        name: values.fullName,
        email: values.email,
        phone: values.mobile,
        role: values.iam,
        gradeLevel: values.gradeLevel,
        subjectInterest: values.subjectsNeeded,
        learningMode: values.tuitionType,
        message: `Preferred timing: ${values.preferredTiming}\nCity/Location: ${values.city || "N/A"}\nSpecific requirements: ${values.specificRequirements || "N/A"}`,
      });

      setStudentSubmitted(true);
      studentForm.reset();
    } catch (error) {
      setStudentError(error instanceof Error ? error.message : "Submission failed.");
    } finally {
      setStudentPending(false);
    }
  }

  async function onTutorSubmit(values: TutorValues) {
    setTutorPending(true);
    setTutorError(null);
    try {
      await submitInquiry({
        type: "tutor_application",
        name: values.fullName,
        email: values.email,
        phone: values.mobile,
        role: "tutor",
        gradeLevel: values.gradeLevelsTeach,
        subjectInterest: values.subjectsTeach,
        learningMode: values.tuitionTypeOffer,
        message: `Highest qualification: ${values.highestQualification}\nYears of experience: ${values.yearsExperience}\nCity/Location: ${values.city || "N/A"}\nTeaching background: ${values.teachingBackground}`,
      });

      setTutorSubmitted(true);
      tutorForm.reset();
    } catch (error) {
      setTutorError(error instanceof Error ? error.message : "Submission failed.");
    } finally {
      setTutorPending(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Dialog open={studentOpen} onOpenChange={setStudentOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#2366c9] text-white hover:bg-blue-700">I Need a Tutor</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Student/Parent Registration</DialogTitle>
            <DialogDescription>
              Submit your needs and EduMeUp will contact you within 24 hours with a suitable tutor match.
            </DialogDescription>
          </DialogHeader>

          {studentSubmitted && (
            <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
              We have received your requirement. Our team will contact you within 24 hours with a suitable tutor match.
            </div>
          )}

          {studentError && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {studentError}
            </div>
          )}

          <Form {...studentForm}>
            <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-4">
              <FormField
                control={studentForm.control}
                name="iam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>I am a</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="grid grid-cols-2 gap-4"
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <Label className="flex items-center gap-2 rounded-md border p-3">
                          <RadioGroupItem value="student" /> Student
                        </Label>
                        <Label className="flex items-center gap-2 rounded-md border p-3">
                          <RadioGroupItem value="parent" /> Parent
                        </Label>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField control={studentForm.control} name="fullName" render={({ field }) => (
                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={studentForm.control} name="mobile" render={({ field }) => (
                  <FormItem><FormLabel>Mobile Number (WhatsApp preferred)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={studentForm.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <FormField control={studentForm.control} name="subjectsNeeded" render={({ field }) => (
                <FormItem><FormLabel>Subject(s) Needed</FormLabel><FormControl><Input placeholder="e.g. Physics, Chemistry" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={studentForm.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade / Level</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Grade 6">Grade 6</SelectItem>
                          <SelectItem value="Grade 7">Grade 7</SelectItem>
                          <SelectItem value="Grade 8">Grade 8</SelectItem>
                          <SelectItem value="O-Level">O-Level</SelectItem>
                          <SelectItem value="IGCSE">IGCSE</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={studentForm.control}
                  name="tuitionType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tuition Type</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Online">Online</SelectItem>
                          <SelectItem value="In-person">In-person</SelectItem>
                          <SelectItem value="Either">Either</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField control={studentForm.control} name="city" render={({ field }) => (
                  <FormItem><FormLabel>City / Location (if in-person)</FormLabel><FormControl><Input {...field} value={field.value || ""} /></FormControl><FormMessage /></FormItem>
                )} />

                <FormField
                  control={studentForm.control}
                  name="preferredTiming"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timing</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Morning">Morning</SelectItem>
                          <SelectItem value="Afternoon">Afternoon</SelectItem>
                          <SelectItem value="Evening">Evening</SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField control={studentForm.control} name="specificRequirements" render={({ field }) => (
                <FormItem><FormLabel>Any Specific Requirements (optional)</FormLabel><FormControl><Textarea {...field} value={field.value || ""} className="min-h-[90px]" /></FormControl><FormMessage /></FormItem>
              )} />

              <Button type="submit" className="w-full bg-[#2366c9] hover:bg-blue-700" disabled={studentPending}>
                {studentPending ? "Submitting..." : "Submit My Requirements ->"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={tutorOpen} onOpenChange={setTutorOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-blue-300 text-[#1e1b4b] hover:bg-blue-50">I Want to Teach</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Tutor Registration</DialogTitle>
            <DialogDescription>
              Register to join the EduMeUp Certified Tutor Network. Our team will contact you within 48 hours.
            </DialogDescription>
          </DialogHeader>

          {tutorSubmitted && (
            <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
              Thank you for registering. Our team will contact you within 48 hours to arrange your certification assessment.
            </div>
          )}

          {tutorError && (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {tutorError}
            </div>
          )}

          <Form {...tutorForm}>
            <form onSubmit={tutorForm.handleSubmit(onTutorSubmit)} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField control={tutorForm.control} name="fullName" render={({ field }) => (
                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={tutorForm.control} name="mobile" render={({ field }) => (
                  <FormItem><FormLabel>Mobile Number (WhatsApp preferred)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={tutorForm.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField control={tutorForm.control} name="highestQualification" render={({ field }) => (
                  <FormItem><FormLabel>Highest Qualification</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={tutorForm.control} name="yearsExperience" render={({ field }) => (
                  <FormItem><FormLabel>Years of Teaching Experience</FormLabel><FormControl><Input type="number" min={0} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={tutorForm.control} name="subjectsTeach" render={({ field }) => (
                <FormItem><FormLabel>Subjects I Teach</FormLabel><FormControl><Input placeholder="e.g. Biology, Chemistry" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <FormField control={tutorForm.control} name="gradeLevelsTeach" render={({ field }) => (
                <FormItem><FormLabel>Grade / Levels I Teach</FormLabel><FormControl><Input placeholder="e.g. Grade 8, O-Level, IGCSE" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={tutorForm.control}
                  name="tuitionTypeOffer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tuition Type I Can Offer</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Online">Online</SelectItem>
                          <SelectItem value="In-person">In-person</SelectItem>
                          <SelectItem value="Both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={tutorForm.control} name="city" render={({ field }) => (
                  <FormItem><FormLabel>City / Location (if in-person)</FormLabel><FormControl><Input {...field} value={field.value || ""} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={tutorForm.control} name="teachingBackground" render={({ field }) => (
                <FormItem><FormLabel>Brief Teaching Background</FormLabel><FormControl><Textarea className="min-h-[90px]" {...field} /></FormControl><FormMessage /></FormItem>
              )} />

              <Button type="submit" className="w-full bg-[#2366c9] hover:bg-blue-700" disabled={tutorPending}>
                {tutorPending ? "Submitting..." : "Register and Apply for Certification ->"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}