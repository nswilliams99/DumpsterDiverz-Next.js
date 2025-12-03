
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type KBCategory = Tables<'kb_categories'>;
type KBArticle = Tables<'kb_articles'>;
type KBArticleInsert = TablesInsert<'kb_articles'>;
type KBArticleUpdate = TablesUpdate<'kb_articles'>;

export const useKBCategories = () => {
  return useQuery({
    queryKey: ['kb-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('kb_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) throw error;
      return data as KBCategory[];
    },
  });
};

export const useKBArticles = (categoryId?: string) => {
  return useQuery({
    queryKey: ['kb-articles', categoryId],
    queryFn: async () => {
      let query = supabase
        .from('kb_articles')
        .select(`
          *,
          kb_categories (
            name,
            slug
          )
        `)
        .eq('is_published', true);
      
      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }
      
      const { data, error } = await query.order('sort_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useKBArticle = (slug: string) => {
  return useQuery({
    queryKey: ['kb-article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('kb_articles')
        .select(`
          *,
          kb_categories (
            name,
            slug
          )
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (error) throw error;
      return data;
    },
  });
};

export const useCreateKBArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (article: KBArticleInsert) => {
      const { data, error } = await supabase
        .from('kb_articles')
        .insert(article)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kb-articles'] });
    },
  });
};

export const useUpdateKBArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: KBArticleUpdate & { id: string }) => {
      const { data, error } = await supabase
        .from('kb_articles')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['kb-articles'] });
    },
  });
};
