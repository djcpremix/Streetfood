import { SignUpForm } from '@/components/auth/SignUpForm';
import { NoSsr } from '@/components/common/NoSsr';

export default function SignUpPage() {
  return (
    <main className="container flex items-center justify-center py-12 md:py-24">
      <NoSsr>
        <SignUpForm />
      </NoSsr>
    </main>
  );
}
