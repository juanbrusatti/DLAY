import { getSupabaseClient } from '@/lib/supabase-client';

const supabase = getSupabaseClient();

export async function registerVisit() {
	const { data, error } = await supabase.from('visits')
        .select('quantity')
        .eq('id', 1)
        .single();
    
    if (error) {
        console.error('Error fetching visit count:', error);
        return;
    }

    const currentCount = data?.quantity;

    const { error: updateError } = await supabase.from('visits')
        .update({ quantity: currentCount + 1 })
        .eq('id', 1);

    if (updateError) {
        console.error('Error updating visit count:', updateError);
    }
}

export async function getVisitCount(): Promise<number> {
	const { data, error } = await supabase.from('visits').select('quantity').eq('id', 1).single();

	if (error) {
		console.error('Error fetching visit count:', error);
		throw error;
	}

	return data?.quantity || 0;
}