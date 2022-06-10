import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { useUserPref } from '../../../contexts';
import { COLORS } from '../../../styles';
import { Icon, Label } from '../../atoms';

export interface FAQType {
  title: string;
  content: string;
}

const faqs: FAQType[] = [
  {
    title: 'How do I upload a song?',
    content: 'Navigation Bar > Add Sound',
  },
  {
    title: 'Why don’t I get a notification when my car alarms?',
    content: 'Settings > Alarm Notification > On',
  },
  {
    title: 'How do I change my password?',
    content: 'Settings > Change Password',
  },
];

export default function Faq() {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(-1);
  const { darkMode } = useUserPref();

  const updateSections = useCallback(
    (_activeSections: number[]) => {
      setActiveSections(_activeSections);
    },
    [setActiveSections]
  );

  useEffect(() => {
    setActiveSectionIndex(activeSections[0] ?? -1);
  }, [activeSections, setActiveSectionIndex]);

  const renderHeader = useCallback(
    (section: FAQType) => {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '95%',
            padding: '3%',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <Label
                label={section.title}
                size="M"
                color={COLORS.SECONDARY_BLUE}
              />
            </View>
            <Icon
              name="Chevron"
              transform={
                section.title === faqs[activeSectionIndex]?.title
                  ? [{ rotateZ: '7.84' }]
                  : []
              }
            />
          </View>
        </View>
      );
    },
    [activeSections, activeSectionIndex]
  );

  const renderContent = useCallback(
    (section: FAQType) => {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Label
            label={section.content}
            style={{ marginLeft: 15 }}
            size="S"
            color={darkMode ? COLORS.WHITE : COLORS.BLACK}
          />
        </View>
      );
    },
    [darkMode]
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Accordion
        sections={faqs}
        activeSections={activeSections}
        onChange={updateSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        underlayColor={'none'}
      />
    </ScrollView>
  );
}
