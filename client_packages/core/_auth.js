global.c._Auth = class _Auth {
    constructor() {

    }

    join() {
        _.cef.setInteract(true);
        localPlayer.freezePosition(true);
        localPlayer.setVisible(false, false);

        global.client.camera = mp.cameras.new('default', new mp.Vector3(2778.8583984375, 4445.71240234375, 129.32052612304688), new mp.Vector3(0, 0, 0), 15);

        global.client.camera.pointAtCoord(2578.02880859375, 4269.470703125, 60.12599182128906);
        global.client.camera.setActive(true);

        mp.game.cam.renderScriptCams(true, false, 0, true, false);

        _.cef.show('auth', true);
    }

    finish(username) {
        localPlayer.setCoords(797.208984375, -2978.392822265625, 6.020942211151123, false, false, false, false);
        localPlayer.freezePosition(false);
        localPlayer.setVisible(true, true);

        global.client.camera.destroy(true);

        mp.game.cam.renderScriptCams(false, true, 0, false, true);

        _.cef.show('auth', false);
        _.cef.setInteract(false);

        mp.gui.chat.push(`Добро пожаловать на Ruin-Mode, ${username}!`)
    }
}
