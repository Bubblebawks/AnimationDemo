class RoyLine {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./royLine.png"), 0, 0, 97, 103, 76, 0.07);

		this.x = 125;
		this.y = 100;
		this.speed = 50;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 592) this.x = 0;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}