import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

export default function LatestItem({ latestItemList }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Latest Item</Text>
      <FlatList
        data={latestItemList}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 5 }} className=" p-1 rounded-lg border-[1px] border-slate-200">
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: 160 }} // Adjust dimensions
            />
            <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 12,}} className="text-green-500">{item.category}</Text>
              <Text style={{ fontSize: 17 }}>{item.title}</Text>
              <Text style={{ fontSize: 17 }}>{item.price} $</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
