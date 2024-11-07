import { MapName, mapList } from '../data/maplist';

export const getCurrentAppState = ({ presentMap, drawCanvasEditor }: any) => {
    return ({ v: '1.0.0', map: presentMap, editor: drawCanvasEditor?.export.toJson() } as any)
}

export const loadCurrentAppState = ({ json, setPresentMap, setPresentMapURL, drawCanvasEditor } : any) => {
    if (json.map in MapName) {
        setPresentMap(json.map)
        for (const mapinfo of mapList) {
            if (mapinfo.map === json.map) {
                drawCanvasEditor?.reset()
                setPresentMapURL({ imgPrepareLink: mapinfo.imgPrepareLink, imgBlankLink: mapinfo.imgBlankLink })
            }
        }
    }
    if(json.editor) {
        drawCanvasEditor?.import.json(json.editor)
    }
}

export const save = ({ presentMap, drawCanvasEditor }: any) => {
    const a = document.createElement("a")
    const file = new Blob(
        [JSON.stringify(getCurrentAppState({presentMap, drawCanvasEditor }))],
        { type: 'text/plain' })
    a.href = URL.createObjectURL(file)
    a.download = `SMA_${presentMap.replace(/ /g, '_')}_001.json`
    a.click()
}

export const load = ({ setPresentMap, setPresentMapURL, drawCanvasEditor }: any) => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.addEventListener("change", function (e) {
        const file = (e.target as any).files[0]
        const reader = new FileReader()
        reader.onload = function (e) {
            loadCurrentAppState({setPresentMap, setPresentMapURL, drawCanvasEditor, json: JSON.parse(e.target!.result as string)})
        }
        reader.readAsText(file)
    });
    input.click()
}
