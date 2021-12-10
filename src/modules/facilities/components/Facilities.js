import React from 'react';
import { TouchableOpacity,RefreshControl, StyleSheet } from 'react-native';
import { Container, Content, View, Card, CardItem, Body, Item, Input, Button, Left, Icon, Thumbnail } from 'native-base';
import { Text } from 'components';
import { Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const Facilities = () => {
    return (
        <>
        <Container >
            <Content>
                <View style={{ height: height - (height * 0.1), backgroundColor: '#0086b3' }}>
                    {/* <View>
                        <Item style={{marginTop: 50,marginBottom: 20,borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2,borderRightWidth: 2, width: 330, marginLeft: 33, height:50,borderRadius:15, borderColor: 'rgba(158, 150, 150, .5)'}}>
                            <Input style={{ width: 10 }} placeholderTextColor='white' placeholder='' />
                        </Item>
                    </View> */}

                    <View style={{height: 550, backgroundColor: '#fff' }}>
                        <Card style={{marginTop: 100, marginLeft: 35}} noShadow>
                            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                <TouchableOpacity style={{width: 150, marginRight: 20, marginBottom: 20}} onPress={() => console.log('Schedules')} activeOpacity={1}>
                                    <CardItem style={{backgroundColor: '#0086b3',  height: 150, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
                                        <Body style={styles.container}>
                                            <Text>
                                                <Button style={[styles.Button2, { margin: 0}]} transparent light onPress={() => console.log('Schedules') } >
                                                    <Text light>Schedules</Text>
                                                </Button>
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: 150, marginRight: 20, marginBottom: 20}} onPress={() => console.log('Request Shift') } activeOpacity={1}>
                                    <CardItem style={{backgroundColor: '#0086b3', height: 150, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
                                        <Body style={styles.container}>
                                            <Text>
                                                <Button style={[styles.Button2, { margin: 0}]} transparent light onPress={() => console.log('Request Shift') }>
                                                    <Text light>Request Shift</Text>
                                                </Button>
                                            </Text>                                    
                                        </Body>
                                    </CardItem>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </View>
                </View>
            </Content>
        </Container>
        </>
    )
}

const styles = StyleSheet.create({
    test: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    container: {
        justifyContent: "center", 
        alignItems: "center"
      }
})

export default Facilities;