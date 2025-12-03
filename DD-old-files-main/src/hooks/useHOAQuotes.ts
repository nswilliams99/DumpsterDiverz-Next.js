import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { TablesInsert } from '@/integrations/supabase/types';

type HOAQuoteInsert = TablesInsert<'hoa_quote_requests'>;

export const useCreateHOAQuote = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (quote: HOAQuoteInsert) => {
      const { data, error } = await supabase
        .from('hoa_quote_requests')
        .insert(quote)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hoa-quotes'] });
    },
  });
};
