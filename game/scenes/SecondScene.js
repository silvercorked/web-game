export default {
    name: 'SecondScene',
    children: [
        {
            prefabName: 'RedRectangle'
        },
        {
            prefabName: 'BlueRectangle',
            x: 200,
            y: 300
        },
        {
            gameObject: {
                name: 'GreenRectangle',
                components: [
                    {
                        name: 'MoveComponent'
                    },
                    {
                        name: 'DrawComponent',
                        args: [
                            'green'
                        ]
                    }
                ]
            },
            x: 100,
            y: 500
        },
        {
			gameObject: {
				name: 'ChangeScene',
				components: [
					{
						name: 'ChangeSceneComponent'
					}
				]
			}
		}
    ]
}