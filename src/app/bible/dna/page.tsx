// Página de DNA del Bible

import { mockBible } from "@/lib/mock-data";

export default function ADNPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ADN del Proyecto</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            defaultValue={mockBible.title}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Género</label>
          <input
            type="text"
            defaultValue={mockBible.genre}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Temas</label>
          <div className="mt-1 flex gap-2">
            {mockBible.themes.map((theme, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tono visual</label>
          <input
            type="text"
            defaultValue={mockBible.toneVisual}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Logline</label>
          <textarea
            defaultValue={mockBible.logline}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Idea controladora</label>
          <textarea
            defaultValue={mockBible.controllingIdea}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          🤖 Sugerir ADN con IA
        </button>
      </div>
    </div>
  );
}