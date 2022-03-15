import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { PricingCard, colors } from 'react-native-elements';

const HeaderSearch = ({data}) => {
    return (
        <View style={{marginBottom: 120}}>
          <SwipeListView data={data} renderItem={({item}) => (
            <PricingCard
              color={colors.primary}
              title= {[ `${item.facility_name} Facility` ]}
              price= {item.schedule_date}
              info={[ `Schedule: ${item.time_start} to ${item.time_end}` ]}
              button={{ title: 'Get Schedule' }}
            />
          )}
          />

        </View>
      )
}

export default HeaderSearch;