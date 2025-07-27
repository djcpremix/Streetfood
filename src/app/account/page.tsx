import { AccountForm } from '@/components/auth/AccountForm';
import { NoSsr } from '@/components/common/NoSsr';

export default function AccountPage() {
  return (
    <main className="container flex items-center justify-center py-12 md:py-24">
      <NoSsr>
        <AccountForm />
      </NoSsr>
    </main>
  );
}
