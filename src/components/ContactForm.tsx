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

function encodeForm(data: Record<string, any>) {
    return new URLSearchParams(data).toString();
}

export default function ContactForm() {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const mutation = useMutation(
        {
            mutationFn: async (data: FormValues) => {
                const body = encodeForm({
                    'form-name': 'contact',
                    ...data
                });

                const res = await fetch('/netlify-form.html', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body
                });
                if (!res.ok) throw new Error('Form submission failed');
                return res;
            },
            onError: () => {
                toast.error('Opps something went wrong. Please try again.');
            },
            onSuccess: () => {
                toast.success('Thank you, we will be in touch!');
                reset();
            }
        },
        queryClient
    );

    const onSubmit = (data: FormValues) => {
        mutation.mutate(data);
    };

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    handleSubmit(onSubmit)(event);
                }}
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
                            {...register('name')}
                            id="name"
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
                        {...register('email')}
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
                        {...register('phone')}
                        id="phone"
                        required
                    />
                    <FieldLabel htmlFor="message" className="sr-only">
                        Message:
                    </FieldLabel>
                    <Textarea
                        className="bg-white text-black"
                        placeholder="Message*"
                        {...register('message')}
                        id="message"
                        required
                    />
                    <div data-netlify-recaptcha="true" />
                    <Button
                        type="submit"
                        disabled={mutation.isPending}
                        variant="default"
                        className="w-fit"
                    >
                        {mutation.isPending ? <Spinner /> : 'Submit'}
                    </Button>
                </FieldGroup>
            </form>
            <Toaster position="bottom-left" />
        </div>
    );
}
