import { event as trackEvent } from 'onedollarstats';

import { Button } from './ui/button';
import { Field, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        trackEvent('form-submission', { label: 'Contact Query' });

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // @ts-expect-error Type mismatch
            body: new URLSearchParams(formData).toString()
        })
            .then(() => console.log('Thank you, we will be in touch!'))
            .catch(() =>
                console.error('Opps something went wrong. Please try again.')
            );
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                name="queries"
                data-netlify="true"
            >
                <FieldGroup>
                    <input type="hidden" name="form-name" value="queries" />
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
        </div>
    );
}
