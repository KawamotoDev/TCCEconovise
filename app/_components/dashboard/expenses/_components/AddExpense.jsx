import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { Loader } from 'lucide-react';
import moment from 'moment';
import React, { useState } from 'react'
import { toast } from 'sonner';

function AddExpense({ budgetId, user, refreshData }) {

    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const [loading, setLoading] = useState(false);

    const addNewExpense = async () => {
        setLoading(true)
        const result = await db.insert(Expenses).values({
            name: name,
            amount: amount,
            budgetId: budgetId,
            createdAt: moment().format('DD/MM/yyy')
        }).returning({ insertedId: Budgets.id });

        setAmount('');
        setName('');
        if (result) {
            setLoading(false)
            refreshData()
            toast('Nova despesa adicionada!')
        }
        setLoading(false);
    }
    return (
        <div className='border p-5 rounded-lg'>
            <h2 className='font-bold text-lg'>Adicionar Despesa</h2>
            <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Nome da Despesa</h2>
                <Input placeholder="ex: Decoração do Quarto"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Valor da Despesa</h2>
                <Input placeholder="ex: R$ 1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
            </div>
            <Button disabled={!(name && amount) || loading}
                onClick={() => addNewExpense()}
                className="mt-3 w-full">
                {loading ?
                    <Loader className="animate-spin" /> : "Adicionar Nova Despesa"
                }
            </Button>
        </div>
    )
}

export default AddExpense
