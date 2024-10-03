import { Produto } from '@/core';
import Image from 'next/image';
import Link from 'next/link';

export interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;
    return (
        <Link
            href={`/produto/${produto.id}`}
            className="bg-violet-dark relative flex max-w-[350px] flex-col rounded-xl border border-white/10"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={produto.imagem}
                    alt="Imagem do Produto"
                    className="object-contain"
                    fill
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 border-t border-white/10 p-5">
                <span className="text-lg font-semibold">
                    {props.produto.nome}
                </span>
                <span className="self-start border-b border-dashed text-sm">
                    {produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de {props.produto.precoBase}
                    </span>
                    <span className="text-xl font-semibold text-emerald-500">
                        por {props.produto.precoPromocional}
                    </span>
                </div>
                <button className="flex h-8 items-center justify-center rounded-full border-emerald-500 bg-violet-700 hover:border-2">
                    <span>Adicionar</span>
                </button>
            </div>
        </Link>
    );
}
