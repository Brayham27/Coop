import VideoCard from './VideoCard.jsx'

export default function CatalogRow({ title, items }) {
  return (
    <section className="catalog-row">
      <p className="row-eyebrow">Catálogo</p>
      <h2 className="row-title">{title}</h2>
      <div className="row-scroller">
        {items.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
