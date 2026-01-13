import { CgFacebook, CgMail } from 'react-icons/cg';

export default function Jumbotron() {
    return (
        <div className="grid px-4 md:grid-cols-2 md:gap-20 md:px-0">
            <div>
                <h1 className="mb-4 text-4xl font-semibold text-brand">
                    Serving the Canterbury region since 1987.
                </h1>
                <p className="mb-2">
                    Get in touch with us today about your Project, Renovation or
                    Maintenance work
                </p>
                <div className="mb-4 flex gap-2">
                    <a href="https://www.facebook.com/scallyelectrical">
                        <CgFacebook size="23" className="hover:text-white/80" />
                    </a>
                    <a href="mailto:scallyelectrical@xtra.co.nz">
                        <CgMail size="25" className="hover:text-white/80" />
                    </a>
                </div>
            </div>
            <div>
                <img
                    src="/banner.png"
                    className="rounded-3xl object-cover"
                    alt="Scally Electrical"
                />
            </div>
        </div>
    );
}
