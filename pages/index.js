import React, {useEffect} from 'react';
import Login from './auth/login';
import { useRouter } from 'next/router';

function Home() {
  const router = new useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default Home;

