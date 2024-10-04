'use client'
import { Produto } from '@/core';
import useProdutos from '@/data/hooks/useProdutos';
import { useEffect, useState } from 'react';

export default function ProdutoPage(props: any) {
    const { obterProdutoPorId } = useProdutos();
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? <div>{produto?.nome}</div> : <div>Não encontrado</div>;
}
