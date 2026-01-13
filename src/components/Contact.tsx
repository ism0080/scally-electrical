import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className="grid px-4 md:grid-cols-2 md:gap-20 md:px-0">
            <div className="mb-12 md:mb-0">
                <ContactForm />
            </div>
            <div className="mb-12 md:mb-0">
                <h2 className="mb-4 text-4xl font-semibold text-brand">
                    Contact Us.
                </h2>
                <a href="mailto:scallyelectrical@xtra.co.nz">
                    <p>scallyelectrical@xtra.co.nz</p>
                </a>
                <a href="tel:0274324978">
                    <p>027 432 4978</p>
                </a>
                <div className="mt-4">
                    <p>PO Box 32105</p>
                    <p>Canterbury 8147</p>
                </div>
            </div>
        </div>
    );
}
