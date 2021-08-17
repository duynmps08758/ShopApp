function CustomTab({ state, descriptors, navigation }) {
    return (
    <View style={{ flexDirection: 'row', height: 50 }}>
    {state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    let label =
    options.tabBarLabel !== undefined
    ? options.tabBarLabel
    : options.title !== undefined
    ? options.title
    : route.name;
    
    const isFocused = state.index === index;
    
    const onPress = () => {
    const event = navigation.emit({
    type: 'tabPress',
    target: route.key,
    canPreventDefault: true,
    });
    
    if (!isFocused && !event.defaultPrevented) {
    navigation.navigate(route.name);
    }
    };
    
    return (
    <TouchableOpacity
    key={index}
    activeOpacity={1}
    accessibilityRole="button"
    accessibilityState={isFocused ? { selected: true } : {}}
    accessibilityLabel={options.tabBarAccessibilityLabel}
    testID={options.tabBarTestID}
    onPress={onPress}
    style={{ flex: 1 }}
    >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.7, borderBottomColor: Colors.lightGray }}>
    <Text style={{ color: Colors.black, fontSize: FontSizes.size18, fontWeight: isFocused ? '700' : 'normal' }}>{label}</Text>
    <View style={{ position: 'absolute', bottom: 0, height: 4, width: '60%', backgroundColor: isFocused ? Colors.main_color : 'transparent', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
    </View>
    
    </TouchableOpacity>
    );
    })}
    </View>
    );
   }