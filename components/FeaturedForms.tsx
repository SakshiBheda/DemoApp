import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type FormItem = {
  id: string;
  title: string;
};

type FeaturedFormsProps = {
  onViewAllPress?: () => void;
  onFormPress?: (formId: string) => void;
};

export function FeaturedForms({ onViewAllPress, onFormPress }: FeaturedFormsProps) {
  // Sample form items
  const formItems: FormItem[] = [
    {
      id: '1',
      title: 'Getting a new ration card',
    },
    {
      id: '2',
      title: 'Getting a separate ration card',
    },
    {
      id: '3',
      title: 'The matter of obtaining no objection certificate for petroleum storage',
    },
  ];

  const handleFormPress = (formId: string) => {
    if (onFormPress) {
      onFormPress(formId);
    } else {
      console.log(`Form ${formId} pressed`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Forms Listing</Text>
        <TouchableOpacity onPress={onViewAllPress}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {formItems.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.formItem}
          onPress={() => handleFormPress(item.id)}
        >
          <Text style={styles.formTitle}>{item.title}</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  viewAll: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500'
  },
  formItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  formTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    flex: 1,
    paddingRight: 16
  },
  chevron: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600'
  }
});