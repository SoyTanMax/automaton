import React, { useState } from 'react';
import { Text } from '../components/Text';
import { Page } from '../components/Page';
import { Button } from '../components/Button';
import { ConversationalForm } from '../components/ConversationalForm';
import CodeEditor from '../components/CodeEditor';

export function CreateCollectionPage() {
  const [showForm, setShowForm] = useState(false)
  return (
    <Page>
        <div className="flex flex-col gap-8 items-center w-full">
            {!showForm && (
              <>
                <div className='container flex items-center justify-between w-full'>
                  <Text size="2xl">
                    Create your collection
                  </Text>
                  <Button onClick={() => setShowForm(prevShowForm => !prevShowForm)}>
                    Continue
                  </Button>
                </div>
                <CodeEditor />
              </>
            )}
            {showForm && <ConversationalForm handleBack={() => setShowForm(prevShowForm => !prevShowForm)} />}
        </div>
    </Page>
  );
}