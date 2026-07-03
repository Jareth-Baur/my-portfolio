interface Props {
    name: string;
}

export default function SkillCard({ name }: Props) {
    return (
        <div className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center transition hover:border-blue-500">

            <h3 className="font-semibold text-white">
                {name}
            </h3>

        </div>
    );
}