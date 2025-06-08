'use client';

import React, { use } from 'react'; // імпорт React.use()
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  // розпаковуємо params
  const { id } = use(params);

  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onCloseAction={() => router.back()}
    />
  );
}
