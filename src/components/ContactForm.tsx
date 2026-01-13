import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../store';
import { toast, Toaster } from 'sonner';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';
import { Field, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

type FormValues = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch('/netlify-form.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => toast.success('Thank you, we will be in touch!'))
            .catch(() =>
                toast.error('Opps something went wrong. Please try again.')
            );
    };

    // const mutation = useMutation(
    //     {
    //         mutationFn: async (data: FormValues) => {
    //             const body = encodeForm({
    //                 'form-name': 'contact',
    //                 ...data
    //             });

    //             const res = await fetch('/netlify-form.html', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded'
    //                 },
    //                 body
    //             });
    //             if (!res.ok) throw new Error('Form submission failed');
    //             return res;
    //         },
    //         onError: () => {
    //             toast.error('Opps something went wrong. Please try again.');
    //         },
    //         onSuccess: () => {
    //             toast.success('Thank you, we will be in touch!');
    //             reset();
    //         }
    //     },
    //     queryClient
    // );

    // const onSubmit = (data: FormValues) => {
    //     mutation.mutate(data);
    // };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                name="contact"
                data-netlify="true"
            >
                <FieldGroup>
                    <input type="hidden" name="form-name" value="contact" />
                    <Field>
                        <FieldLabel htmlFor="name" className="sr-only">
                            Name:
                        </FieldLabel>
                        <Input
                            className="bg-white text-black"
                            type="text"
                            placeholder="Name*"
                            id="name"
                            name="name"
                            required
                        />
                    </Field>
                    <FieldLabel htmlFor="email" className="sr-only">
                        Email:
                    </FieldLabel>
                    <Input
                        className="bg-white text-black"
                        placeholder="Email*"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                    <FieldLabel htmlFor="phone" className="sr-only">
                        Phone:
                    </FieldLabel>
                    <Input
                        className="bg-white text-black"
                        placeholder="Phone*"
                        type="text"
                        id="phone"
                        name="phone"
                        required
                    />
                    <FieldLabel htmlFor="message" className="sr-only">
                        Message:
                    </FieldLabel>
                    <Textarea
                        className="bg-white text-black"
                        placeholder="Message*"
                        name="message"
                        id="message"
                        required
                    />
                    <div data-netlify-recaptcha="true" />
                    <Button type="submit" variant="default" className="w-fit">
                        Submit
                    </Button>
                </FieldGroup>
            </form>
            <Toaster position="bottom-left" />
        </div>
    );
}
