import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: categories } = await supabase.from("category").select();

  return (
    <>
      {categories?.length && (
        <ul>
          {categories?.map((category, i) => {
            return <li key={i}>{category.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}
