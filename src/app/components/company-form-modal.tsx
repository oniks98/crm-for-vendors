'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

export default function CompanyFormModal({
  onCloseAction,
  ...rest
}: ModalProps) {
  return (
    <Modal {...rest} onCloseAction={onCloseAction}>
      <CompanyForm onSubmit={() => onCloseAction()} />
    </Modal>
  );
}
