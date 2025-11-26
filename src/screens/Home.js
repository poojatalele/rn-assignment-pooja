import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import Editor from '../components/Editor';
import Preview from '../components/Preview';

const Home = () => {
    const [noteContent, setNoteContent] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
            <View style={styles.header}>
                <Text style={styles.title}>Notes</Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.content}
            >
                {isEditing ? (
                    <Editor value={noteContent} onChangeText={setNoteContent} />
                ) : (
                    <Preview content={noteContent} />
                )}
            </KeyboardAvoidingView>

            <TouchableOpacity
                style={styles.fab}
                onPress={() => setIsEditing(!isEditing)}
                activeOpacity={0.8}
            >
                <Text style={styles.fabIcon}>
                    {isEditing ? '👁️' : '✏️'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: '#F9FAFB',
    },
    title: {
        fontSize: 34,
        fontWeight: '800',
        color: '#111827',
        letterSpacing: -0.5,
    },
    content: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        zIndex: 10,
    },
    fabIcon: {
        fontSize: 24,
        color: '#fff',
    },
});

export default Home;
