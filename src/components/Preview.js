import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';

const Preview = ({ content }) => {
    if (!content) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Nothing to preview yet.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Markdown style={markdownStyles}>
                {content}
            </Markdown>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    contentContainer: {
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 100, // Space for FAB
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
    },
    emptyText: {
        color: '#9CA3AF',
        fontSize: 16,
        fontStyle: 'italic',
    },
});

const markdownStyles = {
    body: {
        fontSize: 18,
        color: '#374151',
        lineHeight: 28,
    },
    heading1: {
        fontSize: 32,
        fontWeight: '800',
        marginTop: 24,
        marginBottom: 16,
        color: '#111827',
        letterSpacing: -0.5,
    },
    heading2: {
        fontSize: 26,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 12,
        color: '#1F2937',
        letterSpacing: -0.3,
    },
    heading3: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 10,
        color: '#374151',
    },
    code_block: {
        backgroundColor: '#1F2937',
        padding: 16,
        borderRadius: 12,
        fontFamily: 'monospace',
        marginVertical: 16,
        color: '#E5E7EB',
    },
    code_inline: {
        backgroundColor: '#E5E7EB',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        fontFamily: 'monospace',
        color: '#DC2626',
        fontWeight: '600',
    },
    blockquote: {
        backgroundColor: '#EFF6FF',
        borderLeftColor: '#4F46E5',
        borderLeftWidth: 4,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginVertical: 16,
        borderRadius: 4,
    },
    link: {
        color: '#4F46E5',
        textDecorationLine: 'none',
        fontWeight: '600',
    },
    list_item: {
        marginVertical: 6,
    },
};

export default Preview;
