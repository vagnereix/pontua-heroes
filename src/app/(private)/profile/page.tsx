import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function ProfilePage() {
  const heroId = cookies().get('selectedHero');
  redirect(`/profile/${heroId?.value}`);
}
