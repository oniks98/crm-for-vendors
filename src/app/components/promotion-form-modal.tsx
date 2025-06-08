'use client';

import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface PromotionFormModal extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onCloseAction,
  ...rest
}: PromotionFormModal) {
  return (
    <Modal {...rest} onCloseAction={onCloseAction}>
      <PromotionForm companyId={companyId} onSubmit={() => onCloseAction()} />
    </Modal>
  );
}
