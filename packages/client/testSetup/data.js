export const resources = [
    {
        actions: [
            {
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Run Action',
                confirmText: 'Are you sure you want to run this action?',
                fields: [
                    {
                        attributes: {},
                        camelCaseName: 'publishDate',
                        component: 'DateTimeField',
                        creationRules: [],
                        databaseField: 'publish_date',
                        defaultToNow: false,
                        defaultValue: '08/29/2020',
                        description: '',
                        fieldName: 'DateTime',
                        firstDayOfWeek: 0,
                        format: 'MM/dd/yyyy',
                        hidden: false,
                        inputName: 'publish_date',
                        isNullable: true,
                        isRelationshipField: false,
                        isSearchable: false,
                        isSortable: false,
                        isUnique: false,
                        name: 'Publish date',
                        pickerFormat: 'MM/dd/yyyy',
                        rules: ['required'],
                        showOnCreation: true,
                        showOnDetail: true,
                        showOnIndex: true,
                        showOnUpdate: true,
                        sqlDatabaseFieldType: 'datetime',
                        updateRules: [],
                    },
                ],
                intent: 'positive',
                name: 'Publish on',
                showOnDetail: true,
                showOnIndex: true,
                showOnTableRow: true,
                slug: 'publish-on',
            },
            {
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Run Action',
                confirmText: 'Are you sure you want to run this action?',
                fields: [
                    {
                        attributes: {},
                        camelCaseName: 'preventPublish',
                        component: 'DateTimeField',
                        creationRules: [],
                        databaseField: 'prevent_publish',
                        defaultToNow: false,
                        defaultValue: '08/29/2020',
                        description: '',
                        fieldName: 'DateTime',
                        firstDayOfWeek: 0,
                        format: 'MM/dd/yyyy',
                        hidden: false,
                        inputName: 'prevent_publish',
                        isNullable: true,
                        isRelationshipField: false,
                        isSearchable: false,
                        isSortable: false,
                        isUnique: false,
                        name: 'Prevent publish',
                        pickerFormat: 'MM/dd/yyyy',
                        rules: ['required'],
                        showOnCreation: true,
                        showOnDetail: true,
                        showOnIndex: true,
                        showOnUpdate: true,
                        sqlDatabaseFieldType: 'datetime',
                        updateRules: [],
                    },
                ],
                intent: 'positive',
                name: 'Publish on',
                showOnDetail: true,
                showOnIndex: true,
                showOnTableRow: false,
                slug: 'publish-on',
            },
        ],
        collection: 'posts',
        defaultPerPage: 1,
        displayInNavigation: true,
        displayField: 'title',
        valueField: 'id',
        fields: [
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'name',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'name',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'Name',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: true,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'description',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'description',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'description',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: true,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'content',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'content',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'content',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: true,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'visuals',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'visuals',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'Visuals',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: false,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
        ],
        group: 'Resources',
        label: 'Posts',
        slug: 'posts',
        messages: {
            'title.required': 'The title field is required.',
            'publishedAt.required': 'The published at field is required.',
        },
        name: 'Post',
        param: 'posts',
        perPageOptions: [10, 25, 50],
        primaryKey: '_id',
    },
    {
        actions: [],
        collection: 'news',
        defaultPerPage: 1,
        displayInNavigation: true,
        displayField: 'title',
        valueField: 'id',
        fields: [
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'name',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'name',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'Name',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: true,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'description',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'description',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'description',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: true,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'content',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'content',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'content',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: true,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
            {
                asObjectId: true,
                asString: false,
                attributes: {},
                component: 'TextField',
                creationRules: [],
                databaseField: 'visuals',
                defaultValue: '',
                description: '',
                fieldName: 'Text',
                inputName: 'visuals',
                isNullable: true,
                isRelationshipField: false,
                isSearchable: false,
                isSortable: false,
                isUnique: false,
                name: 'Visuals',
                rules: [],
                showOnCreation: true,
                showOnDetail: true,
                showOnIndex: false,
                showOnUpdate: true,
                sqlDatabaseFieldType: 'string',
                updateRules: [],
            },
        ],
        group: 'Resources',
        label: 'News',
        slug: 'news',
        messages: {
            'title.required': 'The title field is required.',
            'publishedAt.required': 'The published at field is required.',
        },
        name: 'News',
        param: 'news',
        perPageOptions: [10, 25, 50],
        primaryKey: '_id',
    },
]

export const user = {
    email: 'dodo@email.com',
    firstName: 'dozie',
    lastName: 'nwoga',
    password: '$2a$10$d.IeGxbRR4kc1ZxE7u0LSuHMrX9aMlUrbLgLoxqEcVI9I2CyntgV.',
    _id: '5f0d62b4e2fab0431e1d35cf',
}
