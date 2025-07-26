
import { LoginForm } from '@/components/auth/LoginForm';
import { NoSsr } from '@/components/common/NoSsr';

export default function LoginPage() {
  return (
    <main className="container flex items-center justify-center py-12 md:py-24">
      <NoSsr>
        <LoginForm />
      </NoSsr>
    </main>
  );
}
