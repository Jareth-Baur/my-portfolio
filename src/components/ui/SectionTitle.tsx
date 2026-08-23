interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({
    title,
    subtitle
}: Props) {
    return (
        <div className="mb-16">

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                    {subtitle}
                </p>
            )}

        </div>
    );
}
