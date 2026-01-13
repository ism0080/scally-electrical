import { PhoneIcon, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
    return (
        <>
            <header className="p-4 flex sm:items-center bg-black text-white w-full sm:justify-between container mx-auto flex-wrap justify-center">
                <h1 className="text-xl font-semibold">
                    <img src="/scally_electrical.jpg" alt="Scally Electrical" />
                </h1>
                <div className="flex gap-2 w-full sm:w-auto justify-center mt-8 sm:mt-0">
                    <a href="tel:0274324978">
                        <Button variant="default">
                            <PhoneIcon className="size-5 text-black" />
                            Call Now
                        </Button>
                    </a>
                    <a href="https://m.me/scallyelectrical">
                        <Button variant="default">
                            <MessageCircle className="size-5 text-black" />
                        </Button>
                    </a>
                </div>
            </header>
        </>
    );
}
