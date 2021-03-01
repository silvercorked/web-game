export default {
	name: 'FirstScene',
	children: [
		{
			prefabName: 'RedRectangle'
		},
		{
			prefabName: 'BlueRectangle',
			x: 300,
			y: 300,
			children: [
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
					x: 0,
					y: 200
				},
			]
		},
		{
			gameObject: {
				name: 'MovableBlueRectangle',
				components: [
					{
						name: 'DrawComponent',
						args: [
							'blue'
						]
					},
					{
						name: 'PlayerMoveComponent'
					}
				]
			}
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